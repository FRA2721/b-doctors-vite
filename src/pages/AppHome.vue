<!-- script section -->
<script>

export default {
    // name
    name: 'AppHome'
}
</script>
<!-- /script section -->

<!-- template section -->
<template>
    <!-- jumbotron here -->
    <main>

        <div class="bg-success">
            <div class="container evidenza">
                medici in evidenza
            </div>
        </div>

        <div class="container pt-2">

            <input type="text" placeholder="sarch by specialization">
            <p>lista dei dottori</p>
        </div>
    </main>
</template>
<!-- /template section -->



<!-- style section -->
<style lang="scss">
.jumbotron {
    min-height: 500px;
}

.evidenza {
    min-height: 200px;
}
</style>
<!-- /style section -->