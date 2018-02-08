import { FILTER_SELECT, FILTER_DATE_RANGE } from '../constants'

const defaultState = {
    selected : {},
    dateRange : {
        from : null,
        to : null
    }
}

export default (filters = defaultState, action) => {
    const { type, payload } = action

    switch (type) {

        case FILTER_SELECT : {
            console.log(filters.selected)
            return {selected: payload.id}
        }

        default : {
            return filters
        }
    }
}