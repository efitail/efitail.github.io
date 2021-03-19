import Vuex from "vuex";
import Vue from "vue";
import {ApiResource} from "@/js/classes/api-resource";
import {ApiResourceLoader} from "@/js/classes/api-resource-loader";

export default function createStore() {
    return new Vuex.Store({
        state: {},
        mutations: {
            ensureResourceIsLoaded(state: any, resource: ApiResource) {
                if (state.hasOwnProperty(resource.key) && state[resource.key] !== null) {
                    return;
                }
                let apiResourceLoader = new ApiResourceLoader(resource);
                apiResourceLoader.load((content: string) => {
                    Vue.set(state, resource.key, content);
                })
            }
        }
    })
}
