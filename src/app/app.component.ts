import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro';
  firstName = "Erkan"
}

// component mantığı
/**
 * 
 * component uzantısı name.component.ts seklındedır
 * component public olarak class bulundurur  (export)
 * component olabılmesı icin @Component dekorasyonu ile işaretlenmelidir.
 * @Component içerisinde yer alan url ile birlikte view katmanı olusturulur
 * view : name.component.html seklınde olmalıdır
 * 
 * class içerisinde yer alan propertilere / değişkenlere view üzerinden direk olarak erişilebilinir
 * view içerisinde {{degisken_adi}} şekilde kullanılır.
 * 
 * selector: index.html içerisinde body taglari arasında yer alan <app-root> taglarinde
 * angular uygulaması calısıyor
 * yani angular spa (single page application) dir.
 * bizim componentimiz ana html index.html içinde yer alan app-root içine gömülür.
 * 
 */