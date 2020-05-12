import React, { useState, useEffect } from 'react'

const Thumb = ({ file }) => {
  const [loading, setLoading] = useState(false)
  const [thumb, setThumb] = useState('')

  useEffect(() => {
    if (!file) { return  } //
    
    setLoading(true);
    setThumb(() => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setLoading(false);
        setThumb(reader.result);
      };
      reader.readAsDataURL(file);      
    });
    // return () => {
    //   cleanup
    // }
  }, [file])

  return (
    <>
      {file ? (
        loading ? (<p>loading...</p>) :
          (<img src={thumb}
            alt={file.name}
            className="img-thumbnail mt-2"
            height={200}
            width={200} />)
      ) : null
      }
    </>
  );
}

export default Thumb





// import ImageUploader from '../services/ImageUploader'

// class Thumb extends React.Component {
//   state = {
//     loading: false,
//     thumb: undefined,
//   };

//   componentWillReceiveProps(nextProps) {
//     if (!nextProps.file) { return; }
//     this.setState({ loading: true }, () => {
//       let reader = new FileReader();
//       reader.onloadend = () => {
//         this.setState({ loading: false, thumb: reader.result });
//       };
//       reader.readAsDataURL(nextProps.file);
//     });
//   }

//   render() {
//     const { file } = this.props;
//     const { loading, thumb } = this.state;

//     if (!file) { return null; }

//     if (loading) { return <p>loading...</p>; }

//     return (<img src={thumb}
//       alt={file.name}
//       className="img-thumbnail mt-2"
//       height={200}
//       width={200} />);
//   }
// }

// export default Thumb