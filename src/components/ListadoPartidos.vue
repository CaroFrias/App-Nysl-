<template>
  <div class="container mt-2 text-center" style="font-family: 'Anton', sans-serif;">

      <p>NYSL Game Information</p>

      <div class="container">

        <div class="row mb-2">

            <div class="accordion" id="partido1">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <p style="font-size: 70%;">9/01</p>
                        <p>U1 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U4</p>
                        </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>AJ Katzenmaier</p>
                            <p>9:30 a.m.</p>

                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal1"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal1">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11799.124298120736!2d-87.86280100000002!3d42.325868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses-419!2scl!4v1612822421043!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido2">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        <p style="font-size: 70%;">9/01</p>
                        <p>U3 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U2</p>
                        </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>Greenbay</p>
                            <p>1:00 p.m.</p>

                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal2"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal2">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23600.088050761668!2d-87.868864!3d42.320964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x740a7a7d548adce1!2sGreen%20Bay%20School%20(Pre-K)!5e0!3m2!1ses-419!2scl!4v1612826918019!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                                
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido3">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        <p style="font-size: 70%;">9/08</p>
                        <p>U5 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U6</p>
                        </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>Howard A Yeager</p>
                            <p>9:30 a.m.</p>

                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal3"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal3">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11800.799397384219!2d-87.8404646!3d42.316936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses-419!2scl!4v1612827096392!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                                
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido4">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <p style="font-size: 70%;">9/08</p>
                        <p>U6 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U1</p>
                        </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>Marjorie P Hart</p>
                            <p>1:00 p.m.</p>
                            
                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal4"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal4">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1510256.796623536!2d-87.84569000000002!3d42.327164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a4d5f9aafd42e02!2sMarjorie%20P%20Hart%20School!5e0!3m2!1ses-419!2scl!4v1612827349093!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido5">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        <p style="font-size: 70%;">9/15</p>
                        <p>U2 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U4</p>
                        </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>North</p>
                            <p>9:30 a.m.</p>

                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal5"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal5">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23597.295417737165!2d-87.852925!3d42.328409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54f2728b0f77d756!2sNorth%20Chicago%20Community%20High%20School!5e0!3m2!1ses-419!2scl!4v1612827448678!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido6">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        <p style="font-size: 70%;">9/15</p>
                        <p>U3 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U5</p>
                        </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>AJ Katzenmaier</p>
                            <p>1:00 p.m.</p>
                            
                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal6"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal6">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11799.124298120736!2d-87.86280100000002!3d42.325868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses-419!2scl!4v1612822421043!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido7">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        <p style="font-size: 70%;">9/22</p>
                        <p>U1 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U3</p>
                        </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>South</p>
                            <p>9:30 a.m.</p>

                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal7"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal7">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23601.549663667858!2d-87.854593!3d42.317067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ce88e90b96bbec1!2sSouth%20Elementary%20School%20(K-5)!5e0!3m2!1ses-419!2scl!4v1612827744777!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-2">

            <div class="accordion" id="partido8">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEight">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        <p style="font-size: 70%;">9/22</p>
                        <p>U2 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U6</p>
                        </button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>Howard A Yeager</p>
                            <p>1:00 p.m.</p>
                            
                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal8"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal8">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11800.799397384219!2d-87.8404646!3d42.316936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses-419!2scl!4v1612827096392!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                                
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row mb-4">

            <div class="accordion" id="partido9">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingNine">
                        <button class="accordion-button collapsed bg-dark text-white" style="display:unset;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        <p style="font-size: 70%;">9/29</p>
                        <p>U4 &nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp; U5</p>
                        </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#partido1">
                        <div class="accordion-body bg-secondary text-white rounded-bottom">
                            <p>Greenbay</p>
                            <p>9:30 a.m.</p>
                            
                            <i class="fas fa-map-marker-alt" style="font-size: 150%; color:rgb(74, 173, 74);" data-toggle="modal" data-target="#myModal9"></i>

                            <!-- The Modal -->
                            <div class="modal fade" id="myModal9">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23600.088050761668!2d-87.868864!3d42.320964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x740a7a7d548adce1!2sGreen%20Bay%20School%20(Pre-K)!5e0!3m2!1ses-419!2scl!4v1612826918019!5m2!1ses-419!2scl" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                                
                                        </div>
                                        
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>

                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
  
        </div>

    </div>
  </div>

</template>

<script>
    export default {
    name: "ListadoPartidos"
    }
</script>

<style>

</style>