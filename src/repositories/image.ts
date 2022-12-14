import { EntityManager, In, Repository } from 'typeorm'
import { Image } from '../models/image'

export const ImageRepository = (manager: EntityManager) => {
    return manager.getRepository(Image).extend({
        async upsertImages(imageUrls: string[]) {
            const existingImages = await this.find({
                where: {
                    url: In(imageUrls),
                },
            })
            const existingImagesMap = new Map(
                existingImages.map<[string, Image]>((img) => [img.url, img])
            )

            const upsertedImgs: Image[] = []

            for (const url of imageUrls) {
                const aImg = existingImagesMap.get(url)
                if (aImg) {
                    upsertedImgs.push(aImg)
                } else {
                    const newImg = this.create({ url })
                    const savedImg = await this.save(newImg)
                    upsertedImgs.push(savedImg)
                }
            }

            return upsertedImgs
        }
    })
}
