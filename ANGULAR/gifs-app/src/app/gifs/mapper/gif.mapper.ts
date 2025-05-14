import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper {
    /**
     * Los métodos estatic son métodos que pertenecen a la clase, pero no a una instancia de la clase.
     * Por lo tanto, no es necesario crear una instancia de la clase para usarlos.
     * Se pueden llamar directamente desde la clase.
     */
    static mapGiphyItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemToGifToArray(items: GiphyItem[]): Gif[] {
        return items.map(this.mapGiphyItemToGif);
    }
}