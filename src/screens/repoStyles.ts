import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCF9",
  },
  topContainer: {
    backgroundColor: "#FFFCF9",
    paddingBottom: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  profileInfo: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  likeBorder: {
    borderWidth: 2,
    borderColor: "#f28482",
  },
  noBorder: {
    borderWidth: 2,
    borderColor: "#dbcdbf",
  },

  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginBottom: 12,
  },
  header: {
    alignItems: "center",
    paddingTop: 16,
  },
  owner: {
    marginTop: 8,
  },
  repoInfo: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  repoSocial: {
    marginTop: 8,
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    marginVertical: 6,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    marginTop: 16,
  },
  dates: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 16,
    width: "100%",
    justifyContent: "space-between",
  },
});

export default styles;
