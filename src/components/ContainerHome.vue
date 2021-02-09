<template>
    <div id = "containerHome">
        <div class="row">
            <div class="col-12 col-sm-12">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/img/soccer_image1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-xs-block">
                                <h5>Kids</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/soccer_image2.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-xs-block">
                                <h5>Women League</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/soccer_image3.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-xs-block">
                            <h5>Men League</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
                </div>
            </div>
        </div>
        <div>
        <!--     <button>Next</button> -->
        </div>
    </div>
    
</template>

<script>
export default {
    name: "containerHome"
}
</script>

<style>

</style>


