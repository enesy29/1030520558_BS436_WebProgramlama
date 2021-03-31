const React = require('react');
const { mount } = require('enzyme');
const {Game} = require('../src/Game');

const yeniOyun = (driver) =>{
    const kart = driver.find('.kart');
    expect(kart.length).toEqual(1);
}

test("kart sec", () => {
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    card.simulate('click');
    card = driver.find('.kart').at(2);
    card.simulate('click');

    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg' || srcName ==='img/Kopek.jpg').toBeTruthy();

    yeniOyun(driver);
})

test("kazanma durumu", () => {
    let driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let srcName =card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg');
    yeniOyun(driver);
})
test("kaybetme durumu", () => {
    let driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let srcName =card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');

    card = driver.find('.kart').at(1);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    srcName =card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');
    yeniOyun(driver);
})

test("yeni oyun", () => {
    let driver = mount(<Game/>);

    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    card.simulate('click');
    let srcName =card.find("img").prop("src");
    expect(srcName === 'img/Kedi.jpg' || srcName === 'img/Kopek.jpg').toBeTruthy();
    yeniOyun(driver);
    driver = mount(<Game/>)

})

function kartAcildi(driver) {
    const kart = driver.find('.kart');
    expect(kart.length).toEqual(0);
    kart.value(0);
    driver = mount(<Game/>)
}

test("arka kapak",()=>{
    let driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.props(0);
    card.simulate('click');
    card.props(1);
    kartAcildi(driver);
    driver = mount(<Game/>)
})

