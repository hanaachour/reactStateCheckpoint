import {Component} from 'react'

class Profile extends Component {
constructor(){
    super();
    this.state ={
        Bio: "I'm a student",
        profession:"Fullstack JS  Web development student"
    };

}
    render (){

        let Bio = this.state.Bio;
        let profession = this.state.profession;
        return <div>
<img 
src="https://wallpapers.com/images/featured/s52z1uggme5sj92d.jpg" 
style={{width: "300px" }}
 alt="Profilepic"
 />
 <h4> {Bio}</h4>
 <h4>{profession}</h4>
</div>

    }
}
export default Profile;