enum Tcolors {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow',
}

type TShirt = {
    size: number,
    color: Tcolors,
}

const TeeShirt = {
    size: 42,
    color: Tcolors.Green,
}
const TeeShirt2 = {
    size: 39,
    color: Tcolors.Red,
}
const TeeShirt3 = {
    size: 41,
    color: Tcolors.Yellow,
}