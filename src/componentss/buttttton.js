export default function Raaadioos(){
    return(
        <div className="bg-primary py-3" style={{marginRight:'40px',marginLeft:'40px', width:'300px'}}>
            <label>Gender</label>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    );
} 