import { colors } from '../../theme/color'
import { typography } from '../../theme/typography'

const BASE = {
    fontFamily: typography.primary,
    fontSize: 14,
    color: colors.white
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white
}

const BASE_BOLDS = {
    fontFamily: typography.primary2,
    color: colors.white
}

const BASE_BOLDSS = {
    fontFamily: typography.primary3,
    color: colors.white
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 35,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 13,
    },
    h5: {
        ...BASE,
        fontSize: 20,
    },
    h6: {
        ...BASE_BOLD,
        fontSize: 23,
    },
    h7: {
        ...BASE,
        fontSize: 23,
    },
    h8: {
        ...BASE_BOLDS,
        fontSize: 50,
    },
    h9: {
        ...BASE_BOLDSS,
        fontSize: 300,
    },

}