export function shuffle<T>(array: T[]): T[]{
  let i = array.length;

    while(i--){
        const ri = Math.floor(Math.random() * (i + 1));
        [array[i], array[ri]] = [array[ri], array[i]];
    }

    return array;
}


export function get_twemoji_url(emoji: string){
    const code =[...emoji].map(char => char.codePointAt(0)!.toString(16)).join('-');
    return `/twemoji/${code}.svg`;

}