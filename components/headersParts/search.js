import Autocomplete from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'

export default function search({classes, userData}){

    const searchSuggestions = userData?Array.isArray(userData.searchHistory)?userData.searchHistory:[]:[]

    return (
        <div style={{marginLeft: 60}}>
            <Autocomplete 
                id="searchAutoComplete"
                freeSolo
                options={searchSuggestions}
                renderInput={(params) => (
                <TextField 
                    {...params}
                    style={{width:250, backgroundColor:'rgba(255,255,255,0.2)'}}
                    label="Search..."
                    margin="normal"
                    variant="filled"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }} 
                    />             
                )}
            />
        </div>
    )
}