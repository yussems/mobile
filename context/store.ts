import React from "react"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"


class Favorites {
    favorites = []
    constructor() {
        makeAutoObservable(this)
    }
    setFavorite(item: any) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
    }
    removeFavorite(item: any) {
        this.favorites = this.favorites.filter(fav => fav !== item);
    }
    clearFavorites() {
        this.favorites = [];
    }


}

export default new Favorites()