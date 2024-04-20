import TextField from "@mui/material/TextField";

export default function SearchBar() {
    return (
        <div className="main">
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Procure Aqui"
                />
            </div>
        </div>
    );
}