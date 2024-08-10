import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";

const Profile = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate("EditProfile"); // Navigate to the EditProfile screen
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://example.com/user-profile-picture.jpg" }} // Replace with actual profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>johndoe@example.com</Text>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>+1234567890</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Ionicons name="pencil" size={20} color={COLORS.white} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color={COLORS.white} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    padding: SIZES.medium,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: SIZES.large,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginBottom: SIZES.small,
  },
  userName: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.black,
  },
  infoContainer: {
    marginBottom: SIZES.medium,
  },
  infoLabel: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.black,
  },
  infoValue: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.medium,
  },
  editButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: SIZES.small,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.red,
    padding: SIZES.small,
    borderRadius: SIZES.radius,
  },
  logoutButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: SIZES.small,
  },
});

export default Profile;
