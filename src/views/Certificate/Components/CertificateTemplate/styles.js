import { StyleSheet } from '@react-pdf/renderer';
/* eslint-disable prefer-template */

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fcfcfc',
  },
  section: {
    width: 100+'%',
    height: 100+'%',
  },
  certificate: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: '#ffffff',

    header: {
      backgroundColor: '#efefef',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      width: 100+'%',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 0,
      paddingRight: 20,
      marginBottom: 10+'vh',

      date: {
        display: 'flex',
        flexDirection: 'column',
        'align-items': 'flex-end',
        alignItems: 'flexEnd',
      },

      title: {
        fontSize: 16,
        color: '#444',

        emphasis: {
          fontSize: 22,
          fontWeight: 700,
          color: '#8838FF',
        }
      },
      logo: {
        width: 250,
        height: 45,
      },
    },

    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    content: {
      display: 'flex',
      justifyContent: 'center',
      color: '#444',
      fontSize: 22,
      marginBottom: 25,

      emphasis: {
        textTransform: 'capitalize',
        fontSize: 30,
        marginBottom: 25,
        fontWeight: 700,
        color: '#8838FF',
      }
    },

    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      width: 100+'%',
      marginTop: 10+'vh',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#efefef',

      column: {
        textTransform: 'capitalize',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',

        content: {
          color: '#444',
          fontSize: 17,
          marginBottom: 15,

          emphasis: {
            fontSize: 19,
            color: '#8838FF',
            fontWeight: 600,
          }
        }
      }
    },
  }
});

export default styles;