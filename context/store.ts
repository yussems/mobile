import { makeAutoObservable, action } from "mobx";
import { UserInfo } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Favorites {
    favorites: UserInfo[] = [];

    constructor() {
        makeAutoObservable(this);
        this.loadFavorites();
    }

    async loadFavorites() {
        try {
            const jsonValue = await AsyncStorage.getItem("favorites");
            if (jsonValue != null) {
                this.favorites = JSON.parse(jsonValue);
            }
        } catch (e) {
            console.log(e, "AsyncStorage load error");
        }
    }

    @action async setFavorite(item: UserInfo) {
        if (!this.favorites.some(fav => fav.id === item.id)) {

            this.favorites.push(item);
            await this.saveFavorites();
        }
    }

    @action async removeFavorite(item: UserInfo) {
        this.favorites = this.favorites.filter(fav => fav.id !== item.id);
        await this.saveFavorites();
    }

    @action async clearFavorites() {
        this.favorites = [];
        await this.saveFavorites();
    }

    @action async saveFavorites() {
        try {
            const jsonValue = JSON.stringify(this.favorites);
            await AsyncStorage.setItem("favorites", jsonValue);
        } catch (e) {
            console.log(e, "AsyncStorage save error");
        }
    }
}

export default new Favorites();
