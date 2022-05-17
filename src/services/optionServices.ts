import { OptionsRepositories } from "../repositories/optionRepository.js"

async function getAll(){
  const options = await OptionsRepositories.findMany();

  return options;
}

export const OptionServices = {
  getAll
}