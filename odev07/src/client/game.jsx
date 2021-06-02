import React, {Component} from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false,
            defeat : false,
            victory : false
        }
    }

    componentDidMount() {
        this.yeniOyun()
    }

    yeniOyun = () => {
        this.setState({
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false,
            defeat : false,
            victory : false

        })
    }

    kediSec = (index) => {
        const { kart, kediIndex, kartSayac, oyunSonlandi , victory , defeat } = this.state;

        if(!oyunSonlandi){
            const yeniKart = [...kart];
            let durum;

            if(kediIndex===index)
            {
                yeniKart[index] = "img/Kedi.jpg";
                durum = "Kazandınız :)"
                this.setState({victory : true , oyunSonlandi : true})
            }
            else
                {
                yeniKart[index] = "img/Kopek.jpg";
                if(kartSayac===1){
                    this.setState({defeat : true , oyunSonlandi : true})
                }
            }
            this.setState({
                kart:yeniKart,
                kartSayac: this.state.kartSayac+1,
                durum
            });

            if(durum){
                this.setState({
                    oyunSonlandi: true
                })
            }
    }}


    render(){
        const { kart, defeat , victory , kartSayac } = this.state;

        if (victory){
            return (
                <div className="game-result">
                    <h2>Kazandınız!</h2>
                    <img className="kart" src="img/Kedi.jpg"/>
                    <button className="play new-game-button" onClick={this.yeniOyun}>Yeni Oyun</button>
                </div>
            )
        }
        if (defeat){
            return (
                <div className="game-result">
                    <h2>Kaybettiniz!</h2>
                    <img className="kart" src="img/Kopek.jpg"/>
                    <button className="play new-game-button" onClick={this.yeniOyun}>Yeni Oyun</button>
                </div>
            )
        }
            return (
                <div>
                    <p className="welcome-text">{this.state.kartSayac+1}.HAKKINIZ !</p>
                    <img className="kart" src={kart[0]} onClick={()=>{this.kediSec(0)}}/>
                    <img className="kart" src={kart[1]} onClick={()=>{this.kediSec(1)}}/>
                    <img className="kart" src={kart[2]} onClick={()=>{this.kediSec(2)}}/>
                </div>
            );
    }
}

