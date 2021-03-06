export class Libro {
  id: number;
  autor: string;
  titulo: string;
  estado: number;
  referencia: string;
}


const libros: Array<any> = [
    {
      id: 1,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF101'
    },
    {
      id: 2,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF102'
    },
    {
      id: 3,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF103'
    },
    {
      id: 4,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF104'
    },
    {
      id: 5,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF105'
    },
    {
      id: 6,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF106'
    },
    {
      id: 7,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF107'
    },
    {
      id: 8,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF108'
    },
    {
      id: 9,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF109'
    },
    {
      id: 10,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF110'
    },
    {
      id: 11,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF111'
    },
    {
      id: 12,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF112'
    },
    {
      id: 13,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF113'
    },
    {
      id: 14,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF114'
    },
    {
      id: 15,
      autor: 'Autor A',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF115'
    },
    {
      id: 16,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF116'
    },
    {
      id: 17,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF117'
    },
    {
      id: 18,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF118'
    },
    {
      id: 19,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF119'
    },
    {
      id: 20,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF120'
    },
    {
      id: 21,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF121'
    },
    {
      id: 22,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF122'
    },
    {
      id: 23,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF123'
    },
    {
      id: 24,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF124'
    },
    {
      id: 25,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF125'
    },
    {
      id: 26,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF126'
    },
    {
      id: 27,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF127'
    },
    {
      id: 28,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF128'
    },
    {
      id: 29,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF129'
    },
    {
      id: 30,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF130'
    },
    {
      id: 31,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF131'
    },
    {
      id: 32,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF132'
    },
    {
      id: 33,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF133'
    },
    {
      id: 34,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF134'
    },
    {
      id: 35,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF135'
    },
    {
      id: 36,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF136'
    },
    {
      id: 37,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF137'
    },
    {
      id: 38,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF138'
    },
    {
      id: 39,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF139'
    },
    {
      id: 40,
      autor: 'Autor A',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF140'
    },
    {
      id: 41,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF141'
    },
    {
      id: 42,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF142'
    },
    {
      id: 43,
      autor: 'Autor A',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF143'
    },
    {
      id: 44,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF144'
    },
    {
      id: 45,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF145'
    },
    {
      id: 46,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF146'
    },
    {
      id: 47,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF147'
    },
    {
      id: 48,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF148'
    },
    {
      id: 49,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF149'
    },
    {
      id: 50,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF150'
    },
    {
      id: 51,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF151'
    },
    {
      id: 52,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF152'
    },
    {
      id: 53,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF153'
    },
    {
      id: 54,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF154'
    },
    {
      id: 55,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF155'
    },
    {
      id: 56,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF156'
    },
    {
      id: 57,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF157'
    },
    {
      id: 58,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF158'
    },
    {
      id: 59,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF159'
    },
    {
      id: 60,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF160'
    },
    {
      id: 61,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF161'
    },
    {
      id: 62,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF162'
    },
    {
      id: 63,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF163'
    },
    {
      id: 64,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF164'
    },
    {
      id: 65,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF165'
    },
    {
      id: 66,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF166'
    },
    {
      id: 67,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF167'
    },
    {
      id: 68,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF168'
    },
    {
      id: 69,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF169'
    },
    {
      id: 70,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF170'
    },
    {
      id: 71,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF171'
    },
    {
      id: 72,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF172'
    },
    {
      id: 73,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF173'
    },
    {
      id: 74,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF174'
    },
    {
      id: 75,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF175'
    },
    {
      id: 76,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF176'
    },
    {
      id: 77,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF177'
    },
    {
      id: 78,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF178'
    },
    {
      id: 79,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF179'
    },
    {
      id: 80,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF180'
    },
    {
      id: 81,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF181'
    },
    {
      id: 82,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF182'
    },
    {
      id: 83,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF183'
    },
    {
      id: 84,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF184'
    },
    {
      id: 85,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF185'
    },
    {
      id: 86,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF186'
    },
    {
      id: 87,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF187'
    },
    {
      id: 88,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF188'
    },
    {
      id: 89,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF189'
    },
    {
      id: 90,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF190'
    },
    {
      id: 91,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF191'
    },
    {
      id: 92,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF192'
    },
    {
      id: 93,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF193'
    },
    {
      id: 94,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF194'
    },
    {
      id: 95,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF195'
    },
    {
      id: 96,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF196'
    },
    {
      id: 97,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF197'
    },
    {
      id: 98,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF198'
    },
    {
      id: 99,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF199'
    },
    {
      id: 100,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF200'
    },
    {
      id: 101,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF201'
    },
    {
      id: 102,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF202'
    },
    {
      id: 103,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF203'
    },
    {
      id: 104,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF204'
    },
    {
      id: 105,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF205'
    },
    {
      id: 106,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF206'
    },
    {
      id: 107,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF207'
    },
    {
      id: 108,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF208'
    },
    {
      id: 109,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF209'
    },
    {
      id: 110,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF210'
    },
    {
      id: 111,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF211'
    },
    {
      id: 112,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF212'
    },
    {
      id: 113,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF213'
    },
    {
      id: 114,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF214'
    },
    {
      id: 115,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF215'
    },
    {
      id: 116,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF216'
    },
    {
      id: 117,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF217'
    },
    {
      id: 118,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF218'
    },
    {
      id: 119,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF219'
    },
    {
      id: 120,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF220'
    },
    {
      id: 121,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF221'
    },
    {
      id: 122,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF222'
    },
    {
      id: 123,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF223'
    },
    {
      id: 124,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF224'
    },
    {
      id: 125,
      autor: 'Autor A',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF225'
    },
    {
      id: 126,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF226'
    },
    {
      id: 127,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF227'
    },
    {
      id: 128,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF228'
    },
    {
      id: 129,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF229'
    },
    {
      id: 130,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF230'
    },
    {
      id: 131,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF231'
    },
    {
      id: 132,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF232'
    },
    {
      id: 133,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF233'
    },
    {
      id: 134,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF234'
    },
    {
      id: 135,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF235'
    },
    {
      id: 136,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF236'
    },
    {
      id: 137,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF237'
    },
    {
      id: 138,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF238'
    },
    {
      id: 139,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF239'
    },
    {
      id: 140,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF240'
    },
    {
      id: 141,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF241'
    },
    {
      id: 142,
      autor: 'Autor A',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF242'
    },
    {
      id: 143,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF243'
    },
    {
      id: 144,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF244'
    },
    {
      id: 145,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF245'
    },
    {
      id: 146,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF246'
    },
    {
      id: 147,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF247'
    },
    {
      id: 148,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF248'
    },
    {
      id: 149,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF249'
    },
    {
      id: 150,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF250'
    },
    {
      id: 151,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF251'
    },
    {
      id: 152,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF252'
    },
    {
      id: 153,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF253'
    },
    {
      id: 154,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF254'
    },
    {
      id: 155,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF255'
    },
    {
      id: 156,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF256'
    },
    {
      id: 157,
      autor: 'Autor A',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF257'
    },
    {
      id: 158,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF258'
    },
    {
      id: 159,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF259'
    },
    {
      id: 160,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF260'
    },
    {
      id: 161,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF261'
    },
    {
      id: 162,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF262'
    },
    {
      id: 163,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF263'
    },
    {
      id: 164,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF264'
    },
    {
      id: 165,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF265'
    },
    {
      id: 166,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF266'
    },
    {
      id: 167,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF267'
    },
    {
      id: 168,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF268'
    },
    {
      id: 169,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF269'
    },
    {
      id: 170,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF270'
    },
    {
      id: 171,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF271'
    },
    {
      id: 172,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF272'
    },
    {
      id: 173,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF273'
    },
    {
      id: 174,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF274'
    },
    {
      id: 175,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF275'
    },
    {
      id: 176,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF276'
    },
    {
      id: 177,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF277'
    },
    {
      id: 178,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF278'
    },
    {
      id: 179,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF279'
    },
    {
      id: 180,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF280'
    },
    {
      id: 181,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF281'
    },
    {
      id: 182,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF282'
    },
    {
      id: 183,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF283'
    },
    {
      id: 184,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF284'
    },
    {
      id: 185,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF285'
    },
    {
      id: 186,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF286'
    },
    {
      id: 187,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF287'
    },
    {
      id: 188,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF288'
    },
    {
      id: 189,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF289'
    },
    {
      id: 190,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF290'
    },
    {
      id: 191,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF291'
    },
    {
      id: 192,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF292'
    },
    {
      id: 193,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF293'
    },
    {
      id: 194,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF294'
    },
    {
      id: 195,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF295'
    },
    {
      id: 196,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF296'
    },
    {
      id: 197,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF297'
    },
    {
      id: 198,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF298'
    },
    {
      id: 199,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF299'
    },
    {
      id: 200,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF300'
    },
    {
      id: 201,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF301'
    },
    {
      id: 202,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF302'
    },
    {
      id: 203,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF303'
    },
    {
      id: 204,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF304'
    },
    {
      id: 205,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF305'
    },
    {
      id: 206,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF306'
    },
    {
      id: 207,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF307'
    },
    {
      id: 208,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF308'
    },
    {
      id: 209,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF309'
    },
    {
      id: 210,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF310'
    },
    {
      id: 211,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF311'
    },
    {
      id: 212,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF312'
    },
    {
      id: 213,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF313'
    },
    {
      id: 214,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF314'
    },
    {
      id: 215,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF315'
    },
    {
      id: 216,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF316'
    },
    {
      id: 217,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF317'
    },
    {
      id: 218,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF318'
    },
    {
      id: 219,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF319'
    },
    {
      id: 220,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF320'
    },
    {
      id: 221,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF321'
    },
    {
      id: 222,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF322'
    },
    {
      id: 223,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF323'
    },
    {
      id: 224,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF324'
    },
    {
      id: 225,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF325'
    },
    {
      id: 226,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF326'
    },
    {
      id: 227,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF327'
    },
    {
      id: 228,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF328'
    },
    {
      id: 229,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF329'
    },
    {
      id: 230,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF330'
    },
    {
      id: 231,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF331'
    },
    {
      id: 232,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF332'
    },
    {
      id: 233,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF333'
    },
    {
      id: 234,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF334'
    },
    {
      id: 235,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF335'
    },
    {
      id: 236,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF336'
    },
    {
      id: 237,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF337'
    },
    {
      id: 238,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF338'
    },
    {
      id: 239,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF339'
    },
    {
      id: 240,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF340'
    },
    {
      id: 241,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF341'
    },
    {
      id: 242,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF342'
    },
    {
      id: 243,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF343'
    },
    {
      id: 244,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF344'
    },
    {
      id: 245,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF345'
    },
    {
      id: 246,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF346'
    },
    {
      id: 247,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF347'
    },
    {
      id: 248,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF348'
    },
    {
      id: 249,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF349'
    },
    {
      id: 250,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF350'
    },
    {
      id: 251,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF351'
    },
    {
      id: 252,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF352'
    },
    {
      id: 253,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF353'
    },
    {
      id: 254,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF354'
    },
    {
      id: 255,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF355'
    },
    {
      id: 256,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF356'
    },
    {
      id: 257,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF357'
    },
    {
      id: 258,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF358'
    },
    {
      id: 259,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF359'
    },
    {
      id: 260,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF360'
    },
    {
      id: 261,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF361'
    },
    {
      id: 262,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF362'
    },
    {
      id: 263,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF363'
    },
    {
      id: 264,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF364'
    },
    {
      id: 265,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF365'
    },
    {
      id: 266,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF366'
    },
    {
      id: 267,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF367'
    },
    {
      id: 268,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF368'
    },
    {
      id: 269,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF369'
    },
    {
      id: 270,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF370'
    },
    {
      id: 271,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF371'
    },
    {
      id: 272,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF372'
    },
    {
      id: 273,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF373'
    },
    {
      id: 274,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF374'
    },
    {
      id: 275,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF375'
    },
    {
      id: 276,
      autor: 'Autor A',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF376'
    },
    {
      id: 277,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF377'
    },
    {
      id: 278,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF378'
    },
    {
      id: 279,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF379'
    },
    {
      id: 280,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF380'
    },
    {
      id: 281,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF381'
    },
    {
      id: 282,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF382'
    },
    {
      id: 283,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF383'
    },
    {
      id: 284,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF384'
    },
    {
      id: 285,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF385'
    },
    {
      id: 286,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF386'
    },
    {
      id: 287,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF387'
    },
    {
      id: 288,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF388'
    },
    {
      id: 289,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF389'
    },
    {
      id: 290,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF390'
    },
    {
      id: 291,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF391'
    },
    {
      id: 292,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF392'
    },
    {
      id: 293,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF393'
    },
    {
      id: 294,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF394'
    },
    {
      id: 295,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF395'
    },
    {
      id: 296,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF396'
    },
    {
      id: 297,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF397'
    },
    {
      id: 298,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF398'
    },
    {
      id: 299,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF399'
    },
    {
      id: 300,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF400'
    },
    {
      id: 301,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF401'
    },
    {
      id: 302,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF402'
    },
    {
      id: 303,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF403'
    },
    {
      id: 304,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF404'
    },
    {
      id: 305,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF405'
    },
    {
      id: 306,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF406'
    },
    {
      id: 307,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF407'
    },
    {
      id: 308,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF408'
    },
    {
      id: 309,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF409'
    },
    {
      id: 310,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF410'
    },
    {
      id: 311,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF411'
    },
    {
      id: 312,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF412'
    },
    {
      id: 313,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF413'
    },
    {
      id: 314,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF414'
    },
    {
      id: 315,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF415'
    },
    {
      id: 316,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF416'
    },
    {
      id: 317,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF417'
    },
    {
      id: 318,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF418'
    },
    {
      id: 319,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF419'
    },
    {
      id: 320,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF420'
    },
    {
      id: 321,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF421'
    },
    {
      id: 322,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF422'
    },
    {
      id: 323,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF423'
    },
    {
      id: 324,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF424'
    },
    {
      id: 325,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF425'
    },
    {
      id: 326,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF426'
    },
    {
      id: 327,
      autor: 'Autor B',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF427'
    },
    {
      id: 328,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF428'
    },
    {
      id: 329,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF429'
    },
    {
      id: 330,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF430'
    },
    {
      id: 331,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF431'
    },
    {
      id: 332,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF432'
    },
    {
      id: 333,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF433'
    },
    {
      id: 334,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF434'
    },
    {
      id: 335,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF435'
    },
    {
      id: 336,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF436'
    },
    {
      id: 337,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF437'
    },
    {
      id: 338,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF438'
    },
    {
      id: 339,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF439'
    },
    {
      id: 340,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF440'
    },
    {
      id: 341,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF441'
    },
    {
      id: 342,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF442'
    },
    {
      id: 343,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF443'
    },
    {
      id: 344,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF444'
    },
    {
      id: 345,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF445'
    },
    {
      id: 346,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF446'
    },
    {
      id: 347,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF447'
    },
    {
      id: 348,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF448'
    },
    {
      id: 349,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF449'
    },
    {
      id: 350,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF450'
    },
    {
      id: 351,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF451'
    },
    {
      id: 352,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF452'
    },
    {
      id: 353,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF453'
    },
    {
      id: 354,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF454'
    },
    {
      id: 355,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF455'
    },
    {
      id: 356,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF456'
    },
    {
      id: 357,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF457'
    },
    {
      id: 358,
      autor: 'Autor H',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF458'
    },
    {
      id: 359,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF459'
    },
    {
      id: 360,
      autor: 'Autor B',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF460'
    },
    {
      id: 361,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF461'
    },
    {
      id: 362,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF462'
    },
    {
      id: 363,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF463'
    },
    {
      id: 364,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF464'
    },
    {
      id: 365,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF465'
    },
    {
      id: 366,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF466'
    },
    {
      id: 367,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF467'
    },
    {
      id: 368,
      autor: 'Autor C',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF468'
    },
    {
      id: 369,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF469'
    },
    {
      id: 370,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF470'
    },
    {
      id: 371,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF471'
    },
    {
      id: 372,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF472'
    },
    {
      id: 373,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF473'
    },
    {
      id: 374,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF474'
    },
    {
      id: 375,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF475'
    },
    {
      id: 376,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF476'
    },
    {
      id: 377,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF477'
    },
    {
      id: 378,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF478'
    },
    {
      id: 379,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF479'
    },
    {
      id: 380,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF480'
    },
    {
      id: 381,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF481'
    },
    {
      id: 382,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF482'
    },
    {
      id: 383,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF483'
    },
    {
      id: 384,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF484'
    },
    {
      id: 385,
      autor: 'Autor J',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF485'
    },
    {
      id: 386,
      autor: 'Autor J',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF486'
    },
    {
      id: 387,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF487'
    },
    {
      id: 388,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF488'
    },
    {
      id: 389,
      autor: 'Autor F',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF489'
    },
    {
      id: 390,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF490'
    },
    {
      id: 391,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF491'
    },
    {
      id: 392,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF492'
    },
    {
      id: 393,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF493'
    },
    {
      id: 394,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF494'
    },
    {
      id: 395,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF495'
    },
    {
      id: 396,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF496'
    },
    {
      id: 397,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF497'
    },
    {
      id: 398,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF498'
    },
    {
      id: 399,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF499'
    },
    {
      id: 400,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF500'
    },
    {
      id: 401,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF501'
    },
    {
      id: 402,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF502'
    },
    {
      id: 403,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF503'
    },
    {
      id: 404,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF504'
    },
    {
      id: 405,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF505'
    },
    {
      id: 406,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF506'
    },
    {
      id: 407,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF507'
    },
    {
      id: 408,
      autor: 'Autor A',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF508'
    },
    {
      id: 409,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF509'
    },
    {
      id: 410,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF510'
    },
    {
      id: 411,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF511'
    },
    {
      id: 412,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF512'
    },
    {
      id: 413,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF513'
    },
    {
      id: 414,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF514'
    },
    {
      id: 415,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF515'
    },
    {
      id: 416,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF516'
    },
    {
      id: 417,
      autor: 'Autor H',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF517'
    },
    {
      id: 418,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF518'
    },
    {
      id: 419,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF519'
    },
    {
      id: 420,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF520'
    },
    {
      id: 421,
      autor: 'Autor E',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF521'
    },
    {
      id: 422,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF522'
    },
    {
      id: 423,
      autor: 'Autor C',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF523'
    },
    {
      id: 424,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF524'
    },
    {
      id: 425,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF525'
    },
    {
      id: 426,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF526'
    },
    {
      id: 427,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF527'
    },
    {
      id: 428,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF528'
    },
    {
      id: 429,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF529'
    },
    {
      id: 430,
      autor: 'Autor E',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF530'
    },
    {
      id: 431,
      autor: 'Autor A',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF531'
    },
    {
      id: 432,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF532'
    },
    {
      id: 433,
      autor: 'Autor J',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF533'
    },
    {
      id: 434,
      autor: 'Autor G',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF534'
    },
    {
      id: 435,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF535'
    },
    {
      id: 436,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF536'
    },
    {
      id: 437,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF537'
    },
    {
      id: 438,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF538'
    },
    {
      id: 439,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF539'
    },
    {
      id: 440,
      autor: 'Autor C',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF540'
    },
    {
      id: 441,
      autor: 'Autor G',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF541'
    },
    {
      id: 442,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF542'
    },
    {
      id: 443,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF543'
    },
    {
      id: 444,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF544'
    },
    {
      id: 445,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF545'
    },
    {
      id: 446,
      autor: 'Autor H',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF546'
    },
    {
      id: 447,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF547'
    },
    {
      id: 448,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF548'
    },
    {
      id: 449,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF549'
    },
    {
      id: 450,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF550'
    },
    {
      id: 451,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF551'
    },
    {
      id: 452,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF552'
    },
    {
      id: 453,
      autor: 'Autor A',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF553'
    },
    {
      id: 454,
      autor: 'Autor A',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF554'
    },
    {
      id: 455,
      autor: 'Autor D',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF555'
    },
    {
      id: 456,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF556'
    },
    {
      id: 457,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF557'
    },
    {
      id: 458,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF558'
    },
    {
      id: 459,
      autor: 'Autor A',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF559'
    },
    {
      id: 460,
      autor: 'Autor I',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF560'
    },
    {
      id: 461,
      autor: 'Autor H',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF561'
    },
    {
      id: 462,
      autor: 'Autor I',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF562'
    },
    {
      id: 463,
      autor: 'Autor D',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF563'
    },
    {
      id: 464,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF564'
    },
    {
      id: 465,
      autor: 'Autor I',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF565'
    },
    {
      id: 466,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF566'
    },
    {
      id: 467,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF567'
    },
    {
      id: 468,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF568'
    },
    {
      id: 469,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF569'
    },
    {
      id: 470,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF570'
    },
    {
      id: 471,
      autor: 'Autor E',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF571'
    },
    {
      id: 472,
      autor: 'Autor F',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF572'
    },
    {
      id: 473,
      autor: 'Autor B',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF573'
    },
    {
      id: 474,
      autor: 'Autor G',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF574'
    },
    {
      id: 475,
      autor: 'Autor F',
      titulo: 'Estadística',
      estado: 1,
      referencia: 'REF575'
    },
    {
      id: 476,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF576'
    },
    {
      id: 477,
      autor: 'Autor G',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF577'
    },
    {
      id: 478,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF578'
    },
    {
      id: 479,
      autor: 'Autor B',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF579'
    },
    {
      id: 480,
      autor: 'Autor B',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF580'
    },
    {
      id: 481,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 2,
      referencia: 'REF581'
    },
    {
      id: 482,
      autor: 'Autor F',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF582'
    },
    {
      id: 483,
      autor: 'Autor A',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF583'
    },
    {
      id: 484,
      autor: 'Autor J',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF584'
    },
    {
      id: 485,
      autor: 'Autor I',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF585'
    },
    {
      id: 486,
      autor: 'Autor I',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF586'
    },
    {
      id: 487,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF587'
    },
    {
      id: 488,
      autor: 'Autor C',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF588'
    },
    {
      id: 489,
      autor: 'Autor D',
      titulo: 'Mecánica',
      estado: 1,
      referencia: 'REF589'
    },
    {
      id: 490,
      autor: 'Autor F',
      titulo: 'Álgebra',
      estado: 1,
      referencia: 'REF590'
    },
    {
      id: 491,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF591'
    },
    {
      id: 492,
      autor: 'Autor E',
      titulo: 'Física 2',
      estado: 1,
      referencia: 'REF592'
    },
    {
      id: 493,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF593'
    },
    {
      id: 494,
      autor: 'Autor G',
      titulo: 'Estadística',
      estado: 2,
      referencia: 'REF594'
    },
    {
      id: 495,
      autor: 'Autor J',
      titulo: 'Mecánica',
      estado: 2,
      referencia: 'REF595'
    },
    {
      id: 496,
      autor: 'Autor E',
      titulo: 'Cálculo',
      estado: 1,
      referencia: 'REF596'
    },
    {
      id: 497,
      autor: 'Autor D',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF597'
    },
    {
      id: 498,
      autor: 'Autor D',
      titulo: 'Física 2',
      estado: 2,
      referencia: 'REF598'
    },
    {
      id: 499,
      autor: 'Autor C',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF599'
    },
    {
      id: 500,
      autor: 'Autor H',
      titulo: 'Cálculo',
      estado: 2,
      referencia: 'REF600'
    }];

export {libros};
