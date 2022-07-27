import { Contract, BigNumber } from "ethers"
import VoteServiceAbi from "../constants/VoteServiceAbi.json"
import { Web3Provider } from "@ethersproject/providers"
import { Contract as MulticallContract, Provider } from "ethers-multicall"

export interface IVoteDataInterface {
  voteStartAt: BigNumber
  voteEndAt: BigNumber
  choices: string[]
  questionName: string
}

class VoteService {
  async vote(
    account: string,
    contractAddress: string,
    library: Web3Provider,
    choiceId: number
  ) {
    try {
      const signer = library.getSigner(account)
      const contract = new Contract(contractAddress, VoteServiceAbi, signer)
      const tx = await contract.vote(choiceId)
      await tx.wait()
      return tx
    } catch (err) {
      return err
    }
  }

  async getAllChoice(contractAddress: string) {
    try {
      const contract = new Contract(contractAddress, VoteServiceAbi)
      return await contract.getAllChoices()
    } catch (err) {
      console.log(err)
    }
  }

  async getTimestampData(contractAddress: string) {
    try {
      const contract = new Contract(contractAddress, VoteServiceAbi)
      return await contract.getAllChoices()
    } catch (err) {
      console.log(err)
    }
  }

  async getUserVoteStatus(
    contractAddress: string,
    account: string,
    library: Web3Provider
  ) {
    try {
      const signer = library.getSigner(account)
      const contract = new Contract(contractAddress, VoteServiceAbi, signer)
      console.log(contract)
      const result = await contract.getUserVoteData(account)
      console.log(result)
      return result
    } catch (err) {
      console.log("Error occurred!")
      console.log(err)
    }
  }

  async fetchInitialData(library: Web3Provider, contractAddress: string) {
    try {
      const provider = new Provider(library)
      await provider.init()
      const contract = new MulticallContract(contractAddress, VoteServiceAbi)
      const getTimestampdata = contract.getTimeStampData()
      const getAllChoices = contract.getAllChoices()
      const getQuestion = contract.questionName()
      const [[voteStartAt, voteEndAt], choices, questionName] =
        await provider.all([getTimestampdata, getAllChoices, getQuestion])

      return {
        voteStartAt: voteStartAt as BigNumber,
        voteEndAt: voteEndAt as BigNumber,
        choices: choices as string[],
        questionName: questionName as string,
      }
    } catch (err) {
      console.log(err)
    }
  }

  async fetchVoteData(
    library: Web3Provider,
    contractAddress: string,
    numberOfChoices: number
  ) {
    try {
      console.log(contractAddress)
      const provider = new Provider(library)
      await provider.init()
      const contract = new MulticallContract(contractAddress, VoteServiceAbi)
      const callFn = Array.from(Array(numberOfChoices).keys()).map((idx) => {
        return contract.getChoiceData(idx)
      })
      const data = await provider.all(callFn)
      const reduceData: { title: string; numberOfVote: number }[] = data.reduce(
        (prevValue, currentValue) => {
          return [
            ...prevValue,
            {
              title: currentValue[1],
              numberOfVote: currentValue[0].toNumber(),
            },
          ]
        },
        []
      )
      return reduceData
    } catch (err) {
      console.log(err)
    }
  }
}

export const voteService = new VoteService()
