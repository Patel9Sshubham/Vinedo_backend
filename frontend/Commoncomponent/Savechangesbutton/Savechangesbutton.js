import React from "react";
import { View , StyleSheet ,TouchableOpacity ,Text} from "react-native";

const SaveChangesButton = () =>{
    return(

        <View style={styles.button}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Save the changes</Text>
                </TouchableOpacity>
              </View>
    )
}
const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      loginButton: {
        borderWidth: 1,
        borderColor: "#3632FF",
    
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 156,
        height: 29,
      },
      loginButtonText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "bold",
      },
})

export default SaveChangesButton;