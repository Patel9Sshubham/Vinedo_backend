import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image ,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Withdraw = ()=>{
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={styles.cardContainer}>
  {/* First Image */}
  <Image
    source={require('../../assets/profile/Rectangle 1503.png')} 
    style={[styles.card, styles.firstCard]}
  />
  {/* Second Image */}
  <Image
    source={require('../../assets/profile/Group.png')} 
    style={[styles.card, styles.secondCard]}
  />
</View>



      {/* Amount Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.currency}>€</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#888"
        />
        <Text style={styles.balance}>/12.04K</Text>
      </View>

      {/* Withdraw Button */}
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingTop: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 90,
  },
  cardContainer: {
    position: 'relative',
    marginVertical: 30,
    alignItems: 'center',
    height:'30%',
  },
  card: {
    width: 300,
    height: 180,
    borderRadius: 20,
  },
  firstCard: {
    position: 'absolute',
    top: 15, 
    zIndex: 1, 
  },
  secondCard: {
    position: 'absolute',
    top: 0, 
    zIndex: 2, 
  },
  bankName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 30,
    height: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,
  },
  currency: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 10,
  },
  balance: {
    color: '#888',
    fontSize: 16,
  },
  withdrawButton: {
    backgroundColor: '#5B33F2',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
 export default Withdraw;