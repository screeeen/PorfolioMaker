import React, { useState, useEffect } from 'react'


class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }
    this.setState({ loading: true }, () => {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };
      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}

export default Thumb

// const Thumb = ({ file }) => {
//   const [loading, setLoading] = useState(false)
//   const [thumb, setThumb] = useState(false)


//   useEffect(() => {
//     // if (!nextProps.file) { return; }
//     setLoading(true);
//     setThumb(() => {
//       let reader = new FileReader();
//       reader.onloadend = () => {
//         setLoading(false);
//         setThumb(reader.result);
//       };
//       // reader.readAsDataURL(nextProps.file);
//     });
//     // return () => {
//     //   cleanup
//     // }
//   }, [file])

//   return (
//     <>
//       {!file ? (<p>loading...</p>) :
//         (<img src={thumb}
//           alt={file.name}
//           className="img-thumbnail mt-2"
//           height={200}
//           width={200} />)
//       }
//     </>
//   );
// }

// export default Thumb