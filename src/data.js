import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio New York Live",
            artist: "RadioNewYorkLive",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://streaming.radiostreamlive.com/radionylive_devices",
            active: true,
        },
        {
            name:"60s-forever",
            artist: "60s-forever",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41311.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://60s-forever.stream.laut.fm/60s-forever?ref=radiode&t302=2022-11-24_22-05-46&uuid=77d5340a-923a-4304-a575-fe748acc190d",
            active: false,
        },
        {
            name:"oldie24fm",
            artist: "oldie24fm",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://oldie24fm.stream.laut.fm/oldie24fm?ref=radiode&t302=2022-11-24_22-07-00&uuid=997a2e74-849f-47f1-aa85-65b17c7c4ca1",
            active: false,
        },
        {
            name:"Oldies Radio Live",
            artist: "OldiesRadioLive",
            cover: "https://cdn-icons-png.flaticon.com/512/1251/1251671.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://ais-edge37-live365-dal02.cdnstream.com/a02077",
            active: false,
        },
        {
            name:"1000 Oldies live",
            artist: "1000Oldieslive",
            cover: "https://img.freepik.com/vector-gratis/fondo-onda-ecualizador-colorido_52683-33072.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://c3.auracast.net/radio/8010/;",
            active: false,
        },
        {
            name:"Oldies FM live",
            artist: "OldiesFMlive",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://stream3.themediasite.co.uk:8030/stream",
            active: false,
        },
        {
            name:"Oldies Hits",
            artist: "OldiesHits",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://26103.live.streamtheworld.com/977_OLDIES_SC",
            active: false,
        },
        {
            name:"Golden Oldies Radio",
            artist: "GoldenOldiesRadio",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://sonic.magicdragon.nl/8034/stream",
            active: false,
        },
        {
            name:"Oldies Music 4 Ever Radio",
            artist: "OldiesMusic4EverRadio",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://radio.streemlion.com:2575/stream",
            active: false,
        },
    ];
}

export default chillHop;


