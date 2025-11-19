<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <!-- PC端专用页面 - 完全独立 -->
    <div class="pc-desktop-wrapper">
        <div class="pc-main-grid">
            <div class="pc-area-lt">
                <h3>⭐ Step 1: </h3>
                <p class="pc-para-w">Use RoBERTa to vectorize our set of feature words (40 for good, 40 for evil) and the comprehensive list of feature words from literature and human reports (a total of 2,023 words).</p>
            </div>
            <div class="pc-area-rt">
                <img :src="'./assets/image/2025100805.png'" alt="">
            </div>
            <div class="pc-area-lb">
                <img :src="'./assets/image/2025100806.png'" alt="">
            </div>
            <div class="pc-area-rb">
                <h3>⭐ Step 2: </h3>
                <p class="pc-para-w">
                    Calculate the cosine similarity between our feature words (pairwise correlations among the 40 good words and pairwise correlations among the 40 evil words), and obtain the distribution of these pairwise correlation values, using the mean as the threshold.
                </p>
                <h3>⭐ Step 3: </h3>
                <p class="pc-para-w">
                    According to the standard from Lin (2021): if the similarity between a new word and the closest word in the existing word set is greater than the mean pairwise correlation of the existing word set, then the meaning of this new word is considered to be covered by the existing word set. Our feature word set (40 for good, 40 for evil) can cover more than 95% of the comprehensive feature words (a total of 2,023 words).
                </p>
            </div>
            <div class="pc-area-bb">
                <p class="pc-para-desc">
                    Lin, C., Keles, U., & Adolphs, R. (2021). Four dimensions characterize attributions from faces using a representative set of English trait words. Nature Communications, 12(1), 5168.
                </p>
            </div>
        </div>
    </div>

    <!-- 移动端专用页面 - 保持旧的不动 -->
    <div class="mobile-wrapper">
        <div class="container">
            <div class="lt">
                <h3>⭐ Step 1: </h3>
                <p class="w">Use RoBERTa to vectorize our set of feature words (40 for good, 40 for evil) and the comprehensive list of feature words from literature and human reports (a total of 2,023 words).</p>
            </div>
            <div class="rt">
                <LazyImage :src="'./assets/image/2025100805.png'" alt=""></LazyImage>
            </div>
            <div class="lb">
                <h3>⭐ Step 2: </h3>
                <p class="w">
                    Calculate the cosine similarity between our feature words (pairwise correlations among the 40 good words and pairwise correlations among the 40 evil words), and obtain the distribution of these pairwise correlation values, using the mean as the threshold.
                </p>
                <LazyImage :src="'./assets/image/2025100806.png'" alt=""></LazyImage>
            </div>
            <div class="rb">
                <h3>⭐ Step 3: </h3>
                <p class="w">
                    According to the standard from Lin (2021): if the similarity between a new word and the closest word in the existing word set is greater than the mean pairwise correlation of the existing word set, then the meaning of this new word is considered to be covered by the existing word set. Our feature word set (40 for good, 40 for evil) can cover more than 95% of the comprehensive feature words (a total of 2,023 words).
                </p>
            </div>
            <div class="bb">
                <p class="desc">
                    Lin, C., Keles, U., & Adolphs, R. (2021). Four dimensions characterize attributions from faces using a representative set of English trait words. Nature Communications, 12(1), 5168.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
/* ==================== PC端专用样式 - 完全独立不受任何影响 ==================== */
.pc-desktop-wrapper {
    display: none;
}

.pc-main-grid {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content;
    grid-column-gap: 10px;
}

.pc-area-lt {
    grid-column: 2 / 6;
}

.pc-area-rt {
    grid-column: 6 / 12;
}

.pc-area-lb {
    grid-column: 2 / 6;
}

.pc-area-rb {
    grid-column: 6 / 12;
}

.pc-area-bb {
    grid-column: 2 / 12;
}

.pc-desktop-wrapper h3 {
    margin: 0;
}

.pc-para-w {
    font-size: 22px;
    line-height: 28px;
}

.pc-para-desc {
    font-size: 16px;
    line-height: 1.5em;
    font-weight: 300;
}

.pc-desktop-wrapper img {
    width: 100%;
}

/* ==================== 移动端专用样式 - 保持旧的不动 ==================== */
.mobile-wrapper {
    display: block;
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content;
    grid-column-gap: 10px;
}

.lt {
    grid-column: 2 / 6;
}
.rt {
    grid-column: 6 / 12;
}
.lb {
    grid-column: 2 / 6;
}
.rb {
    grid-column: 6 / 12;
}
.bb {
    grid-column: 2 / 12;
}

h3 {
    margin: 0;
}
.w {
    font-size: 22px;
    line-height: 28px;
}
.desc {
    font-size: 16px;
    line-height: 1.5em;
    font-weight: 300;
}

:deep(img) {
    width: 100%;
}

/* PC端显示PC版本，移动端显示移动版本 */
@media (min-width: 601px) {
    .pc-desktop-wrapper {
        display: block;
    }
    
    .mobile-wrapper {
        display: none;
    }
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        padding: 0 15px;
    }

    .lt {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .rt {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .lb {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .rb {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .bb {
        grid-column: 1 / 13;
    }

    h3 {
        font-size: 16px;
        line-height: 1.4em;
        margin: 10px 0;
    }

    .w {
        font-size: 14px;
        line-height: 1.6em;
    }

    .desc {
        font-size: 12px;
        line-height: 1.5em;
    }
}
</style>
