import { defineStore } from "pinia";

type ColorScheme = "light" | "dark";
export const useColorScheme = defineStore("color-scheme", {
    state(): { colorScheme: ColorScheme } {
        return {
            colorScheme: "light"
        }
    },
    getters: {
        currScheme(): ColorScheme {
            return this.colorScheme;
        },
        isDark(): boolean {
            return this.colorScheme === "dark";
        }
    },
    actions: {
        switch(colorScheme: ColorScheme) {
            document.documentElement.classList.remove(this.colorScheme);
            this.colorScheme = colorScheme;
            document.documentElement.classList.add(colorScheme);
        }
    }
})