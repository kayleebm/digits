import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import ContactCardAdmin from '@/components/ContactCardAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of all contacts (admin-only). */
const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Get all contacts regardless of owner
  const contacts = await prisma.contact.findMany();

  return (
    <main>
      <Container id="admin-list" fluid className="py-3">
        <Row>
          <Col>
            <h1>List Contacts (Admin)</h1>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4">
          {contacts.map((contact) => (
            <Col key={`Contact-${contact.id}`}>
              <ContactCardAdmin contact={contact} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
