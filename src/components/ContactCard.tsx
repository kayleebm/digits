'use client';

import { Card } from 'react-bootstrap';
import Link from 'next/link'; // ✅ Import Link
import { Contact } from '@/lib/validationSchemas';

interface Props {
  contact: Contact;
}

const ContactCard: React.FC<Props> = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <img
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
        width="75"
      />
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {contact.firstName} {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>

    {/* ✅ Add Edit Link here */}
    <Card.Footer>
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
