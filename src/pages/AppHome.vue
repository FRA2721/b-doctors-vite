<script>

export default {
    name: 'AppHome'
}


</script>

<template>
    <!-- jumbotron here -->
    <main>
        <div class="bg-primary">
            <div class="container jumbotron">

                jumbotron
            </div>
        </div>

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

<style lang="scss">
.jumbotron {
    min-height: 500px;
}

.evidenza {
    min-height: 200px;
}
</style>