
const passport =require ('passport');
const LocalStrategy =require ("passport-local").Strategy
const User =require ('./models/user')





passport.use (new LocalStrategy(async(username,password,done)=>{
    try {
        console.log ('received credentials',username,password)
        const user =await User.findone({username:username});
        if (!user){
            return done(null,false,{message:"incorrectusername"})
        }

        const isPasswordMatched= await user.comparePassword(password)
        if(isPasswordMatched){
            return done(null,user)
        }
        else{
            return done (null ,false ,{message:"incorrect passowrd"})
        }

    } catch (error) {
        return done (error)
    }
}))

module.exports=passport
