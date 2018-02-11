import { FILTER_SELECT, FILTER_DATE_RANGE } from '../constants'

const defaultState = {
    selected : [],
    dateRange : {
        from : null,
        to : null
    }
}

export default (filters = defaultState, action) => {
    const { type, payload } = action

    switch (type) {

        case FILTER_SELECT : {
             console.log(payload);
             
        let values = payload.selected.map(item => item.value)

            return {selected: values}
        }

        default : {
            return filters
        }
    }
}