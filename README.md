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

Jak należy uruchomić projekt:
1. Pobranie repo z git huba
2. Wejście do katalogu projekt
3. W celu uruchomienia projektu należy użyć komendy COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up 
4. W razie problemu komenda: COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up  --build
5. Wejść na localhost:3050
6. Korzystać z strony