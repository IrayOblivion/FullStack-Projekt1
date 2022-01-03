Doc page:
Architektura:
<img src="/projekt/image/doc.jpg">
Potwierdzenie działania usługi:
<img src="/projekt/image/work.jpg">


Jedyne zmiany jakie zaszły względem kodu źródłowego pobranego z lab10 to:
      <ul>
        <li> zmieniłem funkcje liczącą liczby na taką zgodną z tym co wysłałem w lab8 </li>
        <li> zmieniłem źródłowy dockerfile dla klienta oraz workera na zgodny z takim jaki wysysałem w lab8, nazwy pliku źródłowego nie zmieniałem</li>
        <li> ustawiłem w pliku index serwera maksymalny dopuszczalny index na 20</li>
        <li> input dla użytkownika ma teraz typ numeryczny oraz ograniczenie min=1 i max=20, aby było to zgodne z założeniami z lab 8, czyli liczby dodatnie </li>
        <li> zmodyfikowałem app.get("/values/all", async (req, res), aby zwracało ostatnie 10 wprowadzonych indexów</li>
        <li> zmodyfikowałem renderValues, aby zwracało ostatnie 10 wyników obliczeń dla ostatnich 10 wprowadzonych indexów</li>
        <li> zmodyfikowałem App.js, aby służył ja narzędzie routingu zawierające nazwę wykonanego zadania i jego autora</li>

Wszystkie wykorzystywane i zmodyfikowane dockerfile mają postać Dockerfile.dev, a plik compose docker-compose.dev.yml
