import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagsService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    const tagAlreadyExists = await tagsRepository.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    if (!name) {
      throw new Error("Tag invalid");
    }

    const tag = tagsRepository.create({
      name,
    });

    tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagsService };
