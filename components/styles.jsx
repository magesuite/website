export const distances = {
    
    desktop: {
        topPadding: rem(85),
        subheadlineToHeadline: rem(35),
        headlineToContent: rem(100),
        h5ToText: rem(45),
        bottomPadding: rem(85),
        sidesPadding: rem(100),
        bodyToLinkMore: rem(45),
    },
    mobile: {
        topPadding: rem(60),
        subheadlineToHeadline: rem(35),
        headlineToContent: rem(60),
        h5ToText: rem(40),
        bottomPadding: rem(60),
        sidesPadding: rem(20),
        bodyToLinkMore: rem(40),
    }
}

export const distancesMacro = {
        paddingDesktop: `${distances.desktop.topPadding} ${distances.desktop.sidesPadding} ${distances.desktop.bottomPadding}`,
        paddingMobile: `${distances.mobile.topPadding} ${distances.mobile.sidesPadding} ${distances.mobile.bottomPadding}`,
        paddingMobileNoSides: `${distances.mobile.topPadding} 0 ${distances.mobile.bottomPadding}`,
        paddingHeadlineMobile: `${distances.mobile.topPadding} ${distances.mobile.sidesPadding} ${distances.mobile.headlineToContent}`,
        paddingHeadlineDesktop: `${distances.desktop.topPadding} ${distances.desktop.sidesPadding} ${distances.desktop.headlineToContent}`
}

export const colors = {
    d: '#232427',
    g: '#4D4D4D',
    l: '#E5E5E5',
    l2: '#9B9B9B',
    r: '#d81323',
    w: '#fff',
    b: '#222222',
    p: '#FF7844',
    p2: '#FF5F21',
}

export const mediaQueries = {
    mobile: '(max-width: 480px)',
    tabletUp: '(min-width: 480px)',
}

export function resolveScopedStyles(scope) {
    return {
        className: scope.props.className,
        styles: scope.props.children
    }
}

export function rem(px) {
    return String(px/16) + "rem";
}