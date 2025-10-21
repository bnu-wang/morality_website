<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="lt">
            <h3>⭐ Step 1: </h3>
            <p class="w">Use RoBERTa to vectorize our set of feature words (40 for good, 40 for evil) and the comprehensive list of feature words from literature and human reports (a total of 2,023 words).</p>
        </div>
        <div class="rt">
            <img :src="'./assets/image/2025100805.png'" alt="" srcset="">
        </div>
        <div class="lb">
            <img :src="'./assets/image/2025100806.png'" alt="" srcset="">
        </div>
        <div class="rb">
            <h3>⭐ Step 2: </h3>
            <p class="w">
                Calculate the cosine similarity between our feature words (pairwise correlations among the 40 good words and pairwise correlations among the 40 evil words), and obtain the distribution of these pairwise correlation values, using the mean as the threshold.
            </p>
            <h3>⭐ Step 3: </h3>
            <p class="w">
                According to the standard from Lin (2021): if the similarity between a new word and the closest word in the existing word set is greater than the mean pairwise correlation of the existing word set, then the meaning of this new word is considered to be covered by the existing word set. Our feature word set (40 for good, 40 for evil) can cover more than 95% of the comprehensive feature words (a total of 2,023 words).
            </p>
        </div>
        <div class="bb">
            <p class="desc">
                Lin, C., Keles, U., & Adolphs, R. (2021). Four dimensions characterize attributions from faces using a representative set of English trait words. Nature Communications, 12(1), 5168.
            </p>
        </div>
    </div>
</template>

<style lang="css" scoped>
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

img {
    width: 100%;
}
</style>
