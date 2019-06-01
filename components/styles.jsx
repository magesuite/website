export const colors = {
    d: '#222222',
    g: '#4D4D4D',
    l: '#E5E5E5',
    l2: '#9B9B9B',
    l3: '#F7F7F7',
    r: '#d81323',
    w: '#fff',
    b: '#222222',
    p: '#FF7844',
    p2: '#FF5F21',
    bl: '#1A4183'
    
}

export const mediaQueries = {
    mobile: '(max-width: 480px)',
    tabletUp: '(min-width: 480px)',
}

export function rem(px) {
    return String(px/16) + "rem";
}