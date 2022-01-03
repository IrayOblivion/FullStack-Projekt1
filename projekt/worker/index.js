const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index) {
  var a=1;
  var b=1;
  var wynik=0;
 
    if(index<3)wynik=1;
    if(index>2){
        var wynik=0;
        for(var i=2;i<index;++i){
            wynik=a+b;
            a=b;
            b=wynik;
        }
    }
  return wynik;
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
