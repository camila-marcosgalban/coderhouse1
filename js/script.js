$("#btn_3d").click( function() {
    $(".index3d").removeClass("hide");
    $(".indexweb").addClass("hide");
    $(".indexapps").addClass("hide");
    $(".indexmg").addClass("hide");
    $(".indexcp").addClass("hide");
    $(".indexilu").addClass("hide");
    });

    $("#btn_motion").click( function() {
        $(".index3d").addClass("hide");
        $(".indexweb").addClass("hide");
        $(".indexapps").addClass("hide");
        $(".indexmg").removeClass("hide");
        $(".indexcp").addClass("hide");
        $(".indexilu").addClass("hide");
        });

        $("#btn_apps").click( function() {
            $(".index3d").addClass("hide");
            $(".indexweb").addClass("hide");
            $(".indexapps").removeClass("hide");
            $(".indexmg").addClass("hide");
            $(".indexcp").addClass("hide");
            $(".indexilu").addClass("hide");
            });
            $("#btn_web").click( function() {
                $(".index3d").addClass("hide");
                $(".indexweb").removeClass("hide");
                $(".indexapps").addClass("hide");
                $(".indexmg").addClass("hide");
                $(".indexcp").addClass("hide");
                $(".indexilu").addClass("hide");
                });
                $("#btn_ilu").click( function() {
                    $(".index3d").addClass("hide");
                    $(".indexweb").addClass("hide");
                    $(".indexapps").addClass("hide");
                    $(".indexmg").addClass("hide");
                    $(".indexcp").addClass("hide");
                    $(".indexilu").removeClass("hide");
                    });

                    $("#btn_cp").click( function() {
                        $(".index3d").addClass("hide");
                        $(".indexweb").addClass("hide");
                        $(".indexapps").addClass("hide");
                        $(".indexmg").addClass("hide");
                        $(".indexcp").removeClass("hide");
                        $(".indexilu").addClass("hide");
                        });