import "./style/style.css";
import $ from "jquery";
import moment from "moment";

const tampilanWaktu = () =>{
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};

const updateWaktu = ()=>{
    tampilanWaktu();
    setTimeout(updateWaktu, 1000)
};

updateWaktu();
