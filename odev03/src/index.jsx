import React from "react";
import ReactDOM from "react-dom";

var kediID = [3];
var kopekID = [2];

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            indeksler : ['0','1','2'],
            kediIndeks : Math.floor(Math.random() * 3),
            message : "Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.",
            kaybettiniz : "kaybettiniz",
            kazandiniz : "Doğru Cevap tebrikler kazandiniz ",
            count : 0
        };
    }
    render() {
        for (var i = 0 ; i<this.state.indeksler.length ; i++){
            if (kediID === this.state.kediIndeks && this.setState({ count: this.state.count + 1 }) <2){
                return (<div className="mesaj">{this.state.kazandiniz}</div>)
            }
            else if (kediID !== this.state.kediIndeks || this.setState({ count: this.state.count + 1 }) === 2){
                return (<div className="mesaj"><p className="mesaj">{this.state.kaybettiniz}<a href="index.html">buraya tıklayarak yeniden deneyiniz</a></p></div>)
            }
            else {}
        }
        return(
            <div className="body">
            <p className="mesaj">{this.state.message}
            </p>
                <p>You clicked {this.state.count} times</p>
                <img className="kart" src="https://github.com/enesy29/1030520558_BS436_WebProgramlama/blob/master/odev01/img/0.jpg?raw=true" alt="" onClick={() => this.setState({ count: this.state.count + 1 })} id={kediID} width="350" height="250"/>
                <img className="kart" src="https://github.com/enesy29/1030520558_BS436_WebProgramlama/blob/master/odev01/img/1.jpg?raw=true" alt="" onClick={() => this.setState({ count: this.state.count + 1 })} id={kopekID} width="350" height="250"/>
                <img className="kart" src="https://github.com/enesy29/1030520558_BS436_WebProgramlama/blob/master/odev01/img/2.jpg?raw=true" alt="" onClick={() => this.setState({ count: this.state.count + 1 })} id={kopekID} width="350" height="250"/>
            </div>
        );
    }


}
ReactDOM.render(<App/>,document.getElementById("root"))



