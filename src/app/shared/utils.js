export function replaceMonth(month){
    switch (month) {
        case 1: {
            return 'JAN'
        }
        case 2: {
            return 'FEB'
        }
        case 3: {
            return 'MARCH'
        }
        case 4: {
            return 'APRIL'
        }
        case 5: {
            return 'MAY'
        }
        case 6: {
            return 'JUNE'
        }
        case 7: {
            return 'JULY'
        }
        case 8: {
            return 'AUG'
        }
        case 9: {
            return 'SEP'
        }
        case 10: {
            return 'OCT'
        }
        case 11: {
            return 'NOV'
        }
        case 12: {
            return 'DEC'
        }
        default: break
    }
}

export function replaceMonthBack(month){
    switch (month) {
        case 'JAN': {
            return 1
        }
        case 'FEB': {
            return 2
        }
        case 'MARCH': {
            return 3
        }
        case 'APRIL': {
            return 4
        }
        case 'MAY': {
            return 5
        }
        case 'JUNE': {
            return 6
        }
        case 'JULY': {
            return 7
        }
        case 'AUG': {
            return 8
        }
        case 'SEP': {
            return 9
        }
        case 'OCT': {
            return 10
        }
        case 'NOV': {
            return 11
        }
        case 'DEC': {
            return 12
        }
        default: break
    }

}