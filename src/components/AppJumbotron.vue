<!-- script section -->
<script>
    export default{
        // name
        name: "AppJumbotron"
    }
</script>




<!-- template section -->
<template>
    <section class="d-flex">
        <div class="jumbotron">
            <div class="jumbotron-container">
                <h3>We care about you...</h3>
                <h1>THE BEST<br>ONLINE<br>SUPPORT FOR YOUR HEALTH</h1>
                <a href="#" class="btn read-more-btn">READ MORE</a>
                <a href="#" class="play-btn me-2"><i class="fa-solid fa-play"></i></a>
                <span>Meet our doctors</span>
            </div>
        </div>
        <div class="">
            <img src="../assets/imgs/jumbo-doctors.png" alt="">
        </div>
    </section>
</template>




<!-- style section -->
<style lang="scss" scoped>
@use '../styles/general.scss' as *;
.jumbotron{
    padding: 10rem 0;
    
    // h3, h1 tipography
    h3, h1{
        color: white
    }
    
    // jumbotron container formatting section
    .jumbotron-container{
        width: 90%;
        margin: 0 auto;

        // h1 tipography
        h1{
            font-size: 2.5rem;
        }

        // h3 tipography
        h3{
            font-size: .8rem;
        }

        // paly botton formatting section
        .play-btn{
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 1.5px solid white;
            border-radius: 50px;
            text-align: center;
            line-height: 30px;
            margin-left: 50px;
            
            // icon formatting section
            i{
                color: rgb(42, 42, 250);
            }
        }

        .read-more-btn{
            color: white;
            background-color: rgb(69, 168, 202);
        }
    }
}


img{
    width: 750px;
    transform: translateY(+80px);
}

</style>