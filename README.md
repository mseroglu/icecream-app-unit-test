### Libraries

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

### Selectors - Seçiciler
- Test içerisinde elemenletleri çağırmaya yarayan methodlar
- screen aracılığıyla kullanılır.
- https://testing-library.com/docs/queries/about
(getByRole, getByLabelText, getByPlaceholderText, getByText, getByDisplayValue, getByAltText, getByTitle, getByTestId )

 ### Seçiciler > 3 ana parçadan oluşur
 1) Method Tipi 
 2) All İfadesi 
 3) Seçici Method

 * get > başlangıçta domda olan elemtleri almak için kullanılır | elemnt bulunamazsa test başarısı olur

 * query > elementin ekranda olma durumu kesin olmadığı durumlarda kullanılır get ile bezner çalışır | element bulunamazsa hata vermez null döndürür test devam eder

 * find > elementin ne zaman ekrana basılıcağı belli değise (api isteklerinde) kullanılır
 * not: find methodu kullanırsak promise döndürdüğünden async await ile kullanmalıyız
 
 * eğer methoda all eklersek seçici koşuluna uyan bütün elemanları getirir
 * all kullanırsak dönen değer her zaman dizidir 


### HTML Element Rolleri
- Her HTML elementinini bir rolü vardır, bazılarının etiket ismi ile aynı iken bazıları farklıdır
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

### Matchers
- expect komutu ile beraber kullanılan ve element üzerindeki beklentimizi ifade eden methodlardır. (checkbox tiklidir, rengi kırmızıdır, ekranda vardır, .. içeriğe sahiptir vs)
- ELEMENLER: https://github.com/testing-library/jest-dom
- Diğer: https://jestjs.io/docs/using-matchers

### Test Geliştirme Süreci

1- TDD (Test Driven Development)
- Önce testler yazılır sonra işlevler kodlanır
- red to green
- Artısı, testler yük gibi gelmez, Geliştirme sürecinin bir parçası olur. Testleri yazarken dinamik yapının algoritmasını oluşturduğumuz için işlevi daha hızlı kodlayabiliriz

2- BDD (Behaviour Driven Development)
- Önce özellik geliştirilir, sonra testler yazılır
