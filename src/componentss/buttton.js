import { MicNone } from "@mui/icons-material";
import { green } from "@mui/material/colors";

export default function Buttonn(props){
    const {onClick} = props;
    return(
        <button className="bg-primary my-3" style={{marginBottom: '10px'}} type="button" class="btn btn-primary" onClick={onClick}>Submit</button>
    );
}


