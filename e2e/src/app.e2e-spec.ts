import { AppPage } from './app.po';
import { browser, logging, by, element, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  var path = require('path');
  it('Listar colectores', () => {
    page.navigateTo();
    element(by.id('menuColeccionista')).click().then(function () {
      expect(element(by.id('tituloListaColeccionistas')).getAttribute("innerText")).toBe("Lista de Coleccionistas")
    });
    let list = element.all(by.css('thead tr th'));
    expect(list.count()).toBe(3);
    let rows = element.all(by.css('tbody tr'));
    expect(rows.count()).toBe(2);
    let celdas = element.all(by.css('tbody > tr td'));
    expect(celdas.count()).toBe(6);
    let btnDet = element(by.css('tbody > tr td button.button'));
    expect(btnDet.getAttribute("innerText")).toBe("Detalle");

  });

  it('Detalle colector', () => {
    page.navigateTo();
    element(by.id('menuColeccionista')).click().then(function () {
      expect(element(by.id('tituloListaColeccionistas')).getAttribute("innerText")).toBe("Lista de Coleccionistas")
    });
    let txt = element(by.css('tbody  tr > td > dl > dd')).getAttribute("innerText");
    let btnDet = element(by.css('tbody > tr td button.button'));
    btnDet.click();
    let texto = element(by.css('.h3')).getAttribute("innerText");
    expect(texto).toBe(txt);
    let titulo = element(by.css('div.h4')).getAttribute("innerText");
    expect(titulo).toBe('Artistas Favoritos');
    var btns = element.all(by.css('div.btn-group button'));
    expect(btns.count()).toBe(3);
    expect(btns.get(0).getAttribute("innerText")).toBe('Artistas');
    expect(btns.get(1).getAttribute("innerText")).toBe('Asignar Album');
    expect(btns.get(2).getAttribute("innerText")).toBe('Asignar Musicos');
    var divs = element.all(by.css('div.lista a > div.row div.det'));
    expect(divs.count()).toBe(2);
    var divs1 = element.all(by.css('div.lista a > div.row div.det div'));
    expect(divs1.count()).toBe(2);
    var img = element.all(by.css('div.lista a > div.row div.det img'));
    expect(img.count()).toBe(1);
  });

  it('Asignar album', () => {
    page.navigateTo();
    element(by.id('menuColeccionista')).click().then(function () {
      expect(element(by.id('tituloListaColeccionistas')).getAttribute("innerText")).toBe("Lista de Coleccionistas")
    });

    let btnDet = element(by.css('tbody > tr td button.button'));
    btnDet.click();
    var btns = element.all(by.css('div.btn-group button'));
    btns.get(1).click();
    let titulo = element(by.id('tituloAlbum')).getAttribute("innerText");
    expect(titulo).toBe('Asignar Álbum');
    var divs = element.all(by.css('div.p-3 div'));
    expect(divs.count()).toBe(6);
    var form = element.all(by.css('div.p-3 form'));
    expect(form.count()).toBe(1);
    var labels = element.all(by.css('div.p-3 label'));
    expect(labels.count()).toBe(3);

    expect(labels.get(0).getAttribute("innerText")).toBe('Album*');
    expect(labels.get(1).getAttribute("innerText")).toBe('Precio*');
    expect(labels.get(2).getAttribute("innerText")).toBe('Status*');
    var select = element.all(by.css('div.p-3 select'));
    expect(select.count()).toBe(2);
    var buttons = element.all(by.css('div.p-3 button'));
    expect(buttons.count()).toBe(2);
    var precio = element(by.css('div.p-3 input'))

    element.all(by.css('#miselectAlbum option:nth-child(0)')).click();
    precio.sendKeys('123');
    element.all(by.css('#miselectStatus option:nth-child(0)')).click();

    buttons.get(0).click();

    expect(precio.getAttribute("innerText")).toBe("");

  });

  it('Asignar musico', () => {
    page.navigateTo();
    element(by.id('menuColeccionista')).click().then(function () {
      expect(element(by.id('tituloListaColeccionistas')).getAttribute("innerText")).toBe("Lista de Coleccionistas")
    });

    let btnDet = element(by.css('tbody > tr td button.button'));
    btnDet.click();
    var btns = element.all(by.css('div.btn-group button'));
    btns.get(2).click();
    let titulo = element(by.id('tituloMusico')).getAttribute("innerText");
    expect(titulo).toBe('Asignar Artista');

    var divs = element.all(by.css('div.contenedorRadio input'));
    expect(divs.count()).toBe(2);
    var labelsMusicos = element.all(by.css('div.contenedorRadio label'));
    expect(labelsMusicos.count()).toBe(2);
    expect(labelsMusicos.get(0).getAttribute("innerText")).toBe('Musicos');
    expect(labelsMusicos.get(1).getAttribute("innerText")).toBe('Bandas');

    var select = element.all(by.css('div.contenedorMusicos select'));
    expect(select.count()).toBe(1);

    var label = element.all(by.css('div.contenedorMusicos label'));
    expect(label.count()).toBe(1);

    var buttons = element.all(by.css('div.contenedorMusicos button'));
    expect(buttons.count()).toBe(2);

    element.all(by.css('#selectMusicos option:nth-child(0)')).click();

    buttons.get(0).click();
  });


  it('Asignar banda', () => {
    page.navigateTo();
    element(by.id('menuColeccionista')).click().then(function () {
      expect(element(by.id('tituloListaColeccionistas')).getAttribute("innerText")).toBe("Lista de Coleccionistas")
    });

    let btnDet = element(by.css('tbody > tr td button.button'));
    btnDet.click();
    var btns = element.all(by.css('div.btn-group button'));
    btns.get(2).click();
    let titulo = element(by.id('tituloMusico')).getAttribute("innerText");
    expect(titulo).toBe('Asignar Artista');

    var divs = element.all(by.css('div.contenedorRadio input'));
    divs.get(1).click();

    var labels = element.all(by.css('div.contenedorBanda label'));
    expect(labels.count()).toBe(5);

    var select = element.all(by.css('div.contenedorBanda select'));
    expect(select.count()).toBe(1);

    var input = element.all(by.css('div.contenedorBanda input'));
    expect(input.count()).toBe(3);

    var textarea = element.all(by.css('div.contenedorBanda textarea'));
    expect(textarea.count()).toBe(1);

    expect(labels.get(0).getAttribute("innerText")).toBe('Band*');
    expect(labels.get(1).getAttribute("innerText")).toBe('Nombre*');
    expect(labels.get(2).getAttribute("innerText")).toBe('Imagen*');
    expect(labels.get(3).getAttribute("innerText")).toBe('Descripcion*');
    expect(labels.get(4).getAttribute("innerText")).toBe('Fecha Creación*');

    var buttons = element.all(by.css('div.contenedorBanda button'));
    expect(buttons.count()).toBe(2);

    element.all(by.css('#selectMusicos option:nth-child(0)')).click();
    input.get(0).sendKeys('Prueba');
    // input.get(1).sendKeys("C:\Users\pinto\Downloads\002.bmp");
    input.get(2).sendKeys('2021-05-28T01:54');
    textarea.get(0).sendKeys('Esto es una prueba');

    var fileToUpload = 'img/prueba.jpg',
      absolutePath = path.resolve(__dirname, fileToUpload);

    input.get(1).sendKeys(absolutePath);

    buttons.get(0).click();

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
